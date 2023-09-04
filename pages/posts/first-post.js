import Link from 'next/link'
import React from 'react'

export default function FirstPost () {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </>
  )
}

// const Component: React.FunctionComponent<Props> = (props) => (
