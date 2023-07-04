import Image from 'next/image'
import styles from './page.module.css'
import LogoutButton from "@/components/logoutButton"
export default function Home() {
  return (
    <>
      <LogoutButton />
      <h1>Hello</h1>
    </>
  )
}
