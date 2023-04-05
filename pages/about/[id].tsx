import { useRouter } from "next/router"


export default function About() {
    const router = useRouter()
  const { id } = router.query

  return <>
    <p>About: {id}</p>
    <button onClick={() => router.push('/post')}>
      Click here to read more...
    </button>
  </>
}