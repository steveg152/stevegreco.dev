import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

function LinkButton() {
  return (
    <Button>
      <a
        href="/Resume.pdf"
        target="_blank"
        className="inline-flex px-3 py-2 text-sm justify-center items-center"
      >
        Download Resume <Download />
      </a>
    </Button>
  )
}

export { LinkButton }
