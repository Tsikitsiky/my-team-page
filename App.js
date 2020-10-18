import React from 'react';
import Team from './team';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';
import photo4 from './images/photo4.png';
import photo5 from './images/photo5.png';
import photo6 from './images/photo6.png';


function App() {
return(
        <ul>
        <Team responsibility='product owner' photo={photo1} name='Bill Mahoney' />
        <Team responsibility='art director' photo={photo2} name='Saba Cabrera' />
        <Team responsibility='tech lead' photo={photo3} name='Shae Le' />
        <Team responsibility='ux designer' photo={photo4} name='Skylah Lu' />
        <Team responsibility='developer' photo={photo5} name='Griff Richards' />
        <Team responsibility='developer' photo={photo6} name='Stan John' />
        </ul>
)
}

export default App