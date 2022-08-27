
function organizingContainers(container) {
 
  let row = container.map(item=> item.reduce((a,c)=>a+c,0))
  let {column} =  container.reduce(
    (target, items) => {
      items.reduce((subTarget, item, subIndex) => {
        target['column'][subIndex] += item;
        return subTarget;
      }, []);

      return target;
    },
    {
      column: new Array(container.length).fill(0)
    }
  );

  return row.sort().join('') === column.sort().join('') ? 'Possible' : 'Impossible';

}
