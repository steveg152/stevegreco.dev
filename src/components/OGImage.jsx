import satori from 'satori'
import fs from 'node:fs/promises'

const sourceCodeData = await fs.readFile(
  './public/fonts/source_code_pro/SourceCodePro-Regular.ttf',
)

export async function getOGImage(title) {
  const svg = await satori(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '-.02em',
        fontWeight: 700,
        background: '#0f172a',
      }}
    >
      <div
        style={{
          left: 42,
          top: 42,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
            color: '#e8c468',
          }}
        >
          stevegreco.dev
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '60px 20px',
          margin: '0 42px',
          fontSize: 32,
          width: 'auto',
          maxWidth: 550,
          textAlign: 'center',
          backgroundColor: '#1e293b',
          color: '#e8c468',
          lineHeight: 1.4,
        }}
      >
        {title}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: '"Source Code Pro"',
          data: sourceCodeData,
          // data: Buffer.from(SourceCodePro),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  )

  return svg
}
