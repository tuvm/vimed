import { version } from '../../package.json';

function App() {
  window.api.onUpdateAvailable((newVersion) => {
    alert('A new update is available. Downloading now...');
});

  return (
    <div><div>Hello Desktop</div><div>Version: 1.0.2</div></div>);
}

export default App;
