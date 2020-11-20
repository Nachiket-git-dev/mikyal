//let baseApiHost = 'http://localhost:8000';
let baseApiHost= 'https://api.mikyaldev.com'
let projectURL='http://ec2-18-220-29-192.us-east-2.compute.amazonaws.com/project/index.php';
let portfolioURL='http://ec2-18-220-29-192.us-east-2.compute.amazonaws.com/portfolio/index.php/welcome/index/'
//let portfolioURL='http://localhost/portfolio/index.php/welcome/index/'
export var siteConfig = {
    isOpened:false,
    baseApiHost: `${baseApiHost}`,
    nodeAPIBaseUrl: `${baseApiHost}`,
    projectURL: `${projectURL}`,
    portfolioURL:`${portfolioURL}`,
}

