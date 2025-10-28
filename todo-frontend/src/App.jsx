import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';
import { AuthProvider } from './context/AuthContext';

function App() {
	return (
		<AuthProvider>
			<Router>
				<AppContent />
			</Router>
		</AuthProvider>
	);
};

export default App;
