#!/bin/bash
# Pitbull Coloring Book Build Script
# This script builds the complete coloring book

set -e

echo "Building Pitbull Coloring Book..."

# Create output directory
mkdir -p output

# Copy all SVG files to output
cp -r svg output/ 2>/dev/null || true
cp -r simple output/ 2>/dev/null || true
cp -r medium output/ 2>/dev/null || true
cp -r complex output/ 2>/dev/null || true

# Create combined SVG for printing (if needed)
echo "Build complete! Files are in the output/ directory."
echo "To print: Open the HTML files in pages/ directory or use the output SVGs directly."