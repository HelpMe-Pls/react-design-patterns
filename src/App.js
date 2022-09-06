import { UserLoader } from './UserLoader';
import { UserInfo } from './UserInfo';

function App() {
	return (
		<>
		{/* "Hoisted" the data loading & state management of the child components (<UserInfo/>)
		* to the parent/container component (<UserLoader/>) 
		*/}
		<UserLoader userId="123">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="234">
			<UserInfo />
		</UserLoader>
		<UserLoader userId="345">
			<UserInfo />
		</UserLoader>
		</>
	);
}

export default App;
