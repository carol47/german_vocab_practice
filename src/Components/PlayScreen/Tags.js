import React from 'react';

export default function generateTag(tagName){

    switch(tagName){
        case "A1":
            return (<img alt="Level A1" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAVCAYAAAAjODzXAAABYElEQVRIie2Wr2sCYRjHP3DCDQyHLlwwnBgUFhwsOFgRwwTDFgXDxoIcBhGDYWF18bhkXL1mXPTSotE/wWg0Dr4Lp2yCp+XOKwtfeH8878OH533eLy9B6KtYzgnIRMVyTkHoi2I5p/4CvX1no/6CXSGyg9hpW53kE4/nqGIj8zkNkBVyTJR30euRuN4IWTVkmSmBDD1kgLBQbxMT94kcFw3XqG6lBHJ3i1rvEUx1djo+HZAvVOqiyQZd2choo0kWIE8uuplH45cRwkSd1blBNqjeRP3dfIlsUMk7M8hkhqrT/bVOE1FDg3OCPLSRaaP8X1nR4cYRR04WZIUqjwcac40qJzwlUZChhyofMZVqIux4T0kUpHUd/zrG0yhBnKckA7JCVScyL9NB98v9/YGHrG2fYCKr+3t9jVrUR8Z2L2+jSzeBZj2H/kEOglxYZP5DKziGCEI/GmT0Zy04hoLQ1w/Vue59MiJoGwAAAABJRU5ErkJgggAA" />);
        case "A2":
            return (<img alt="Level A2" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAVCAYAAAAjODzXAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAKtSURBVEiJzZZfSNpRFMc//bUG6UipYGk0WKxNEcqgkXvIoGBBQWxEDEaMgoF7GBSDPfQ6Bu2hl2CxsUQZxgLHgiKYNUYJwX49SFBh5FIEsWWojcpUfnspaCYqxLADv4ff+X3PuZ/fPfeeezFP20WZQiUCOXlkCpVonraLeTKFSjQMmpFXa8iFBX1rLL5/Qn54z5szCAB5tYbwnpf8nBEkWWHWysgksyPDhJq/0tunvxgYC+BfnWBjZYHQISTiYRKFGmraR2jS1WUcKGuQA8HKbhwSqyb8D/Uoi5IE68PMW73cNc5gqJMBxxwIg8xMdrB/9IPO+6q0+bMsjYuNVRkN3QYKjhbYXA+nVBVrX9JQJzt9K6FMN4L6RgT/dxPBDCNkB/LLhF/ez+3WZ9SURfAtzRFN1mgtPH7amTTFlZRKgcMwJ5cHOca/IiDXtyEpakOtU5LYsuKOZPMHXoIBKK5tofzSIDEHrsAD6utKAKjQ91Med+ASvBlD4653eCJqtN09SC4LEl23ctLYg/zMUdVH/S0Jv5dthNIFHi7gsCxyvc+Ctiojc6ZdE8aztIDf5+DT7Dl3HDgyseF7wb3qVBACzvEh/rR+pqM5/W7JDiRiw130mt43ff9O7aGN+VeDuJeWaUruKTEB5/gAPq2FDoMm6/6QtjQHwhfQGi7W91oLN2slHDmt+GNJEGOnEO1nEAG2zUa2MyzuNMAu3CtQ87wyxbdKqht1MDXH5noYpVYGsTWcY49w0kNT+RYeYetUu4tnZ4uKWIo0GUEiNr6NDuHbj1Iw2kXCOIP63IILLXYxPycAUTwfm5nSvqXzzgQ/dyKACcekKSlhIxXpOcgDxIHxTH3v/9oHo/zqnL5XB6S4VErQt5YzgKBvDalCCeZpuyhVKHN2Z5UqlKJ52i7+BXT/M47mfqx3AAAAAElFTkSuQmCC" />);
        case "B1":
            return (<img alt="Level B1" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAVCAYAAAAjODzXAAABUElEQVRIie2WsWoCQRiEZ93srijnnZclhHggUYIcIhwhRJCk8wnSpctD2PkE6QIWgoUPcZWlnV06O99l0iiInoJwuhYppll24GP+YffHbDRhpEsE4ESRLnE2mhCRLjENEq7smxOlQbIJAs4gNlqnkz/Iwq/zXYCeaecAEj6xX1D0AAKCnlC0QtEKQS0MYx1xXN31vXBa9FiTZdaQF8haUyMJccfp1tmvX2dXgJAR0+37lQd2iy3Oww4/ckvkCMjK9jjWgkCZgyDL5wBkuDeei4H0OK9ETABa3eIi03cukJ2yApIN3WQaHvJdaDTLsMOBUtSFkD/uRrNWUGcM0Jo2l05BblvsA4RqZvTkkiDVRyYAtY4dJhI+81srAoaffu/MHTn4xCtaYRirew791z2AL2lohaQGCEhaYdgoHgc626d3qv5BMkG8ws11bGjXsrP+ARuvO/3uaMHVAAAAAElFTkSuQmCC" /> );
        case "subst":
            return(<span style={{border: "1px solid black", borderRadius: "3px", backgroundColor: "blanchedalmond"}}>&nbsp;Noun&nbsp;</span>);
        case "verb":
            return(<span style={{border: "1px solid black", borderRadius: "3px", backgroundColor: "darkseagreen"}}>&nbsp;Verb&nbsp;</span>);
        case "other":
            return(<span style={{border: "1px solid black", borderRadius: "3px", backgroundColor: "sandybrown"}}>&nbsp;Other&nbsp;</span>);
        default:
            return undefined;
    }
}
