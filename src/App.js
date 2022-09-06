import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({ goToNext }) => (
	<>
	<h1>Step 1</h1>
	<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
	<h1>Step 2</h1>
	<button onClick={() => goToNext({ age: 100 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
	<h1>Step 3</h1>
	<button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
	</>
);

function App() {
	return (
		// This is "uncontrolled" coz if we wanna show/hide a <Step*/> component,
		// there's no way to do that
		<UncontrolledOnboardingFlow onFinish={data => {
			console.log(data);
			alert('Onboarding complete!');
		}}>
			<StepOne />
			<StepTwo />
			<StepThree />
		</UncontrolledOnboardingFlow>
	);
}

export default App;
