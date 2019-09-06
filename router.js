function route(path, handlers, req, res) {
    if(handlers[path]) {
        handlers[path](req, res);
    } else {
        handlers["404"](req, res);
    }
}

exports.route = route;