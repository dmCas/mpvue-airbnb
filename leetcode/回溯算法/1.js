const graph = [[1,3], [0,2], [1,3], [0,2]];
function isBipartite(graph) {
  let A = {};
  let B = {};
  let queue = [0];
  let Aside = true;
  for (let i = 0; i < graph.length; i++) {
      if (hashMapA[i] == null && hashMapB[i] == null) {
          queue = [i];
          while (queue.length > 0) {
              let temp = [];
              for (let i = 0; i < queue.length; i++) {
                  let currentMap = (Aside) ? hashMapA : hashMapB;
                  let diffMap = (Aside) ? hashMapB : hashMapA;
                  currentMap[queue[i]] = 1;
                  let nodes = graph[queue[i]];
                  for (let j = 0; j < nodes.length; j++) {
                      if (currentMap[nodes[j]]) {
                          return false;
                      } else {
                          if(!diffMap[nodes[j]]) {
                              diffMap[nodes[j]] = 1;
                              temp.push(nodes[j]);
                          }
                      }
                  }
              }
              Aside = !Aside;
              queue = temp;
          }
      }
  }    
  
  return true;
};

console.log(isBipartite(graph))