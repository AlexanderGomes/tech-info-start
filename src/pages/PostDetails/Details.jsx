import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../lib/client'
import './Details.css'

const Details = () => {
const [posts, setPost] = useState()
const {slug} = useParams();


useEffect(() => {
  const query = `*[slug.current == "${slug}"]`;
  client.fetch(query).then((data) => {
    setPost(data[0]);
  });
}, [slug])

console.log(posts)

if(!posts) return       <div class="load-wrapp">
<div class="load-6">
    <p>Loading 6</p>
    <div class="letter-holder">
        <div class="l-1 letter">L</div>
        <div class="l-2 letter">o</div>
        <div class="l-3 letter">a</div>
        <div class="l-4 letter">d</div>
        <div class="l-5 letter">i</div>
        <div class="l-6 letter">n</div>
        <div class="l-7 letter">g</div>
        <div class="l-8 letter">.</div>
        <div class="l-9 letter">.</div>
        <div class="l-10 letter">.</div>
    </div>
</div>
</div>

  return (    
    <div className='details__main'>
     <div className='details__title'>
      <h1 className='details__heading'>{posts.title}</h1>
     </div>
     <div className='details__img'>
       <img className='details__image' src={urlFor(posts.imgUrl)} alt="" />
     </div>
     <div className='details__tag'>
      <p className='details__tag tag-blue'>{posts.tag}</p>
     </div>
     <div className='details__desc'>
      <h2>{posts.details} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sed earum tempore quam praesentium minima laboriosam rerum atque autem accusantium totam repellat quis voluptates sit, soluta dolorum deleniti veniam eveniet sequi nostrum nesciunt ipsam nemo ab dolores. Mollitia et sequi soluta laudantium illum excepturi recusandae quae! Molestiae, quod cupiditate veniam laboriosam quo cumque voluptatibus laudantium veritatis fugit! Veritatis maiores, blanditiis sunt eum libero, consequatur exercitationem eos porro deleniti, minus consectetur cupiditate. Harum doloremque mollitia error! Soluta illum at officiis. Delectus provident incidunt, harum, neque dicta perferendis molestias accusantium maxime vitae excepturi saepe veniam quaerat voluptas possimus tempore ex quasi beatae nemo corrupti facilis hic blanditiis? Voluptatum quidem praesentium modi. Dolore, doloribus incidunt molestiae, laboriosam libero itaque non ad voluptatem vel sapiente asperiores numquam nostrum maxime facere. Nobis, voluptatibus doloribus. Iusto ad ullam mollitia adipisci fuga, odit necessitatibus pariatur sed neque eos cupiditate perferendis nam similique? Fuga explicabo autem inventore rem sint assumenda porro, eos nobis repellat veniam sunt dolorum illum asperiores exercitationem eius, nam vel et corporis. Porro neque repellendus molestias qui placeat aliquid sunt, nulla architecto, obcaecati harum aspernatur officiis aperiam quam a alias praesentium voluptas. Dolorum odio exercitationem aliquam omnis error quasi similique aut, quisquam velit quibusdam tenetur sapiente? Aspernatur, amet error quod, ut sapiente ea quasi harum enim temporibus similique totam, voluptatum autem consequatur rerum quae ipsum unde architecto? Perspiciatis reiciendis totam, beatae culpa, quidem voluptas cum enim obcaecati libero, aspernatur ipsum iure laborum doloribus quam eum reprehenderit earum quisquam minus molestias? Exercitationem labore quas fuga hic consectetur eligendi dolorum veritatis itaque in molestias cum, maxime aut. Esse, expedita cumque at veniam obcaecati optio rerum officiis in ab animi mollitia ipsa eveniet nesciunt ipsum possimus vel voluptatem labore, quasi minus ipsam porro explicabo dolores nemo. Cumque necessitatibus, nisi excepturi nulla temporibus vel nesciunt assumenda exercitationem deserunt error molestiae dicta magnam laboriosam explicabo magni nobis iusto, labore velit, enim natus! Rerum itaque labore magni natus omnis repudiandae cum voluptate aliquid, delectus quod quo, culpa qui quaerat unde laborum nemo, iure hic? Dicta dolorem asperiores hic odit, ea harum pariatur, quae ratione, magni quidem labore voluptate. Perferendis in provident rerum deserunt, animi dolorem nisi veritatis neque quam repudiandae doloribus quod corrupti eum eveniet dicta harum totam eligendi earum, a et ipsa? Optio repellat incidunt voluptates doloremque quia molestias obcaecati est. Amet officiis eos qui quia? Similique temporibus cumque tempora debitis libero, quo nesciunt error facere quas, quia quis praesentium!
      </h2>
     </div>
    </div>
  )
}

export default Details