let rootURL = 'https://www.alphavantage.co/query';
let key = '00BBRXZ7XKB7W2H1';

export default function(code){

    let url = `${rootURL}?apikey=${key}&function=TIME_SERIES_DAILY&outputsize=compact&symbol=${code}`;
//   let url = `${rootURL}?q=${code}&output=json`;
   console.log(url);
  return fetch(url).then(function(response){
        //console.log(response.text());
        return response.text();
  }).then(function(text){
        let data = JSON.parse(text)['Time Series (Daily)'];
        var today;
        for(var key in data) {
            if(data.hasOwnProperty(key)) {
                today = data[key];
                break;
            }
        }
        console.log(today);
        console.log({
            stockIndex: today['1. open'],
            stockChangeRaw: today['2. high'],
            stockChangePercent: today['3. low']
        });
        return {
            stockIndex: today['1. open'],
            stockChangeRaw: today['2. high'],
            stockChangePercent: today['3. low']
        };
  });
}
