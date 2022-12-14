import styles from '../../styles/Post.module.css'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'

export const Post = ({ title, body, image }) => {
  //  console.log(title, body, image)

  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'qx1vzyzi',
      dataset: 'production',
    })

    setImageUrl(imgBuilder.image(image))
  }, [image])

  return (
    <div>
      {/* <h1 className="px-2 mt-1 font-extrabold text-2xl text-gray-900 ">Blogs && Dogs</h1> */}

      <div className={styles.main}>
        <h1 className=" font-bold text-2xl text-blue-700 underline ">{title}</h1>
        {imageUrl && <img className={styles.mainImage} src={imageUrl} />}

        <BlockContent blocks={body} />
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
  const url = `https://qx1vzyzi.api.sanity.io/v2021-06-07/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json())
  const post = result.result[0]

  if (!post) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    }
  }
}

export default Post