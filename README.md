# Frontend assignment

#### Assignment

>_Suunittele/toteuta valitsemillasi web-teknologiolla sovellus, joka Githubin avointa APIa hyödyntäen visualisoi Vincitin tilin alta löytyvät repositoryt ja niiden aktiivisimmat kommitoijat._

in English

> _Design / execute an application with the web technology of your choice using the Github Open API to visualize the repositories and their Most Active commuters under the Vincit account._

#### Implement Details

Fundamental infrastructure is created with [Create React App](https://github.com/facebook/create-react-app). API is handled with [axios](https://github.com/axios/axios).

In the root folder, run:

### `yarn start`

to start the project on [localhost](http://localhost:3000) at port 3000.

Repos are read out and mapped to a long list, which eventually got segmented by 30 repos per page. Pagination is implemented via [react-paginate](https://github.com/AdeleD/react-paginate#readme) library. The most active commiter and their commits amount are harvested under [contributors](https://developer.github.com/v3/repos/#list-contributors) api for each repo, which are placed in the right side of each repo card accordingly.