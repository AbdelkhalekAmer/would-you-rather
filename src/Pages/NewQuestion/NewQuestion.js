import './NewQuestion.css';
import Page from '../Page';
import StaticCard from '../../Components/UI/StaticCard/StaticCard';
import CreateQuestion from '../../Components/Question/CreateQuestion';

const NewQuestion = () => {
    return (<Page>
        <StaticCard>
            <CreateQuestion />
        </StaticCard>
    </Page>);
};

export default NewQuestion;