
//interface iCoffee {
//  id: number,
//  title: string,
//  description: string,
//  ingredients: Array<string>,
//}



//const baseURL: string = 'https://api.sampleapis.com/coffee/hot';
//fetch(baseURL)
//  .then(resp => resp.json())
//  .then(data => displayData(data));
//
//
//
//function displayData(data): string {
//  const arr: Array<string> = [];
//  data.map(item => {
//    arr.push(`
//    <div style="line-height: 0.5em; background-color: lightgray; padding: 20px; white-space: break-spaces;">
//      <h4>ID: ${item.id}</h4>
//      <h2>Title: ${item.title}</h2>
//      <p style="font-size: 22px;">Description:</p>
//      <p style="font-size: 22px; line-height: 1.2em;">${item.description}</p>
//      <p style="font-size: 22px;">Ingredients:</p>
//      <p style="font-size: 22px;">${item.ingredients.join(', ')}</p>
//    </div>
//    `);
//  });
//  return document.querySelector('pre').innerHTML = arr.join('');
//}






