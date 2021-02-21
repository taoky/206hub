#!/usr/bin/env python3
# This script requires Python 3.6+
# A temporary version. It will be replaced by a robuster program later.
from typing import Tuple, Dict
import yaml
import json
import argparse
import os
from collections import defaultdict, namedtuple
from pathlib import Path

argNamespace = namedtuple("argNamespace", ["source", "output"])

def getSourceMeta(source_folder: Path) -> Tuple[Dict]:
  with open(source_folder / "authors.yaml") as f:
    authors = yaml.safe_load(f)
  with open(source_folder / "collections.yaml") as f:
    collections = yaml.safe_load(f)
  return collections, authors

def getItemData(item_folder: Path) -> Tuple[Dict]:
  with open(item_folder / "meta.yaml") as f:
    meta = yaml.safe_load(f)
  comments = {}
  for file in item_folder.glob("*.md"):
    with open(file) as f:
      frontmatter, comment = list(yaml.load_all(f, Loader=yaml.FullLoader))[:2]
      comments[file.stem] = {
        "meta": frontmatter,
        "contents": comment
      }
  return meta, comments

def main(args: argNamespace) -> None:
  contents = {
    "meta": {},
    "collections": defaultdict(dict)
  }
  # get collections & authors
  collections, authors = getSourceMeta(args.source)
  contents["meta"]["collections"] = collections
  contents["meta"]["authors"] = authors
  # get item in each collection
  for collection in collections:
    for item in os.scandir(args.source / collection):
      if item.is_dir():
        item = Path(item)
        item_meta, item_comments = getItemData(item)
        contents["collections"][collection][item.stem] = {
          "meta": item_meta,
          "comments": item_comments
        }
  with open(args.output, "w") as f:
    json.dump(contents, f, ensure_ascii=False)

if __name__ == "__main__":
  parser = argparse.ArgumentParser("The parser for 206hub")
  parser.add_argument("--source", default="data", type=Path, help="Source folder")
  parser.add_argument("--output", default="frontend/static/json/206hub.json", type=Path, help="Output JSON file path")
  args = parser.parse_args()

  main(args)
