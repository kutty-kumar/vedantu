function mountRoutes(app, config) {
    app.use('/', config.homeApp.router)
}

export default mountRoutes;
