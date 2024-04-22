

import Blog from '../../LesComposants/Blog.js'; 
export default function Home({params}) { 

  return (
    <main>
      <Blog id={params.id} />
    </main>
  );
}



  






