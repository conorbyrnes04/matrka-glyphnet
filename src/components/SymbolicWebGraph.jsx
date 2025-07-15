// SymbolicWebGraph.jsx
import React, { useEffect, useRef, useState } from 'react';
import { ForceGraph2D } from 'react-force-graph';
import glyphs from '../data/glyphs.json';

export default function SymbolicWebGraph() {
  const fgRef = useRef()
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    // Map glyphs.json entries to graph nodes
    const nodes = glyphs.map(g => ({
      id: g.id,
      label: g.label,
      group: g.type  // use type for coloring
    }))

    // Build links based on "related" relationships
    const links = []
    glyphs.forEach(g => {
      g.related.forEach(rel => {
        links.push({ source: g.id, target: rel })
      })
    })

    setGraphData({ nodes, links })
  }, [])

  return (
    <div className="w-full h-full">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeLabel="label"
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        nodeCanvasObject={(node, ctx, globalScale) => {
          // draw labels on nodes
          const label = node.label
          const fontSize = 12 / globalScale
          ctx.font = `${fontSize}px Sans-Serif`
          ctx.fillStyle = 'black'
          ctx.fillText(label, node.x + 6, node.y + 6)
        }}
      />
    </div>
  )
}
