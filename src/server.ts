import app from './app';

const server = app.listen(app.get('port'), () => {
    console.log('running app on :',app.get('port'));
});

export default server;