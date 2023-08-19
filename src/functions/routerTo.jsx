import { route, getCurrentUrl } from 'preact-router';

const routerTo = (path) => (getCurrentUrl() != path ? route(path) : null);

export default routerTo;
