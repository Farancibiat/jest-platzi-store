import { configure } from 'enzyme';
import Adpater from 'enzyme-adapter-react-16';

configure({ adapter: new Adpater() });
global.fetch = require('jest-fetch-mock');
