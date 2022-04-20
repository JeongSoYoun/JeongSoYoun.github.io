import React from 'react'

function Image({ name, width, height, style }) {
  return (
    <img
      src={require(`/Users/yoon/dev/JeongSoYoun.github.io/my-blog/content/assets/thumbnail/${name}.png`)}
      width={width}
      height={height}
      style={style}
      alt=""
    />
  )
}

export default Image
