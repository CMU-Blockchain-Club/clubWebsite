export function removeHttp(url:string) {
    if (url.startsWith('https://')) {
      const https = 'https://';
      url = url.slice(https.length);
    }
  
    if (url.startsWith('http://')) {
      const http = 'http://';
      url =  url.slice(http.length);
    }
  
    if(url.startsWith(`www.`)){
      const www = 'www.';
      url =  url.slice(www.length);
    }
  
    // remove extra route at end 
    let endOfPath = url.indexOf("/");
    if(endOfPath){
      url = url.slice(0, endOfPath);
    }
  
    return url;
  }