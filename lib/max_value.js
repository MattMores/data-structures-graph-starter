function maxValue(node, visited=new Set()) {
        let queue = [node]
        let values = []
        while (queue.length) {
          const vertex = queue.shift()
          if (visited.has(vertex)) continue
          visited.add(vertex)
          values.push(vertex.val)
          vertex.neighbors.forEach(neighbor => {
            queue.push(neighbor)
          })
        }
        return Math.max(...values)
      }

module.exports = {
    maxValue
};
