import { STRENGTH, WEAKNESS } from '../actions/types';


const INITIAL_STATE = {
  strength: [],
  weakness: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case STRENGTH:
      return {
        ...state,
        strength: [
          { text: 'HTML-GIT-CSS', value: 'HTML-GIT-CSS' },
          { text: 'CSS-Bootstrap', value: 'CSS-Bootstrap' },
          { text: 'JavaScript', value: 'JavaScript' },
          { text: 'Web-APIs', value: 'Web-APIs' },
          { text: 'Third-Party-APIs', value: 'Third-Party-APIs' },
          { text: 'Server-Side-APIs', value: 'Server-Side-APIs' },
          { text: 'NodeJS', value: 'NodeJS' },
          { text: 'Object-Oriented-Programming', value: 'Object-Oriented-Programming' },
          { text: 'Express', value: 'Express' },
          { text: 'MySQL', value: 'MySQL' },
          { text: 'MVC', value: 'MVC' },
          { text: 'React', value: 'React' },
          { text: 'State', value: 'State' },
        ]
      };
    case WEAKNESS:
      return {
        ...state,
        weakness: [
          { text: 'HTML-GIT-CSS', value: 'HTML-GIT-CSS' },
          { text: 'CSS-Bootstrap', value: 'CSS-Bootstrap' },
          { text: 'JavaScript', value: 'JavaScript' },
          { text: 'Web-APIs', value: 'Web-APIs' },
          { text: 'Third-Party-APIs', value: 'Third-Party-APIs' },
          { text: 'Server-Side-APIs', value: 'Server-Side-APIs' },
          { text: 'NodeJS', value: 'NodeJS' },
          { text: 'Object-Oriented-Programming', value: 'Object-Oriented-Programming' },
          { text: 'Express', value: 'Express' },
          { text: 'MySQL', value: 'MySQL' },
          { text: 'MVC', value: 'MVC' },
          { text: 'React', value: 'React' },
          { text: 'State', value: 'State' },
        ]
      };
    default:
      return state;
  }
}
//WAS HERE