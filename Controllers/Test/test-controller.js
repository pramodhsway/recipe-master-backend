const TestController = (app) => {
    app.get('/api/status', (req, res) => {
        const port = req.headers.host.split(':')[1];
        res.json({"status": 'API Level Controller API is up and running!', port})
    });
    app.get('/status', (req, res) => {
        const port = req.headers.host.split(':')[1];
        res.json({"status": 'Base Level Controller API is up and running!', port})
    });
    app.get('/', (req, res) => {
        const port = req.headers.host.split(':')[1];
        res.json({"status": 'Node application is up and running!', port})
    })
}
export default TestController;