import type React from "react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import { ChevronDownIcon, CpuIcon, ImageIcon, PenToolIcon, SparkleIcon, SquareIcon } from "lucide-react";


const StyleSelector = ({value, onChange, isOpen, setIsOpen} : {value: ThumbnailStyle; onChange: (style: ThumbnailStyle) => void; isOpen: boolean; setIsOpen: (open: boolean) => void}) => {

    const styleDescriptions: Record<ThumbnailStyle, string> = {
        'Bold & Graphic': 'High contrast, bold typography, and striking visuals.',
        'Minimalist': 'Clean, simple design with ample whitespace.',
        'Photorealistic': 'Photo-based, natural looking.',
        'Illustrated': 'Hand-drawn, artistic, creative.',
        'Tech/Futuristic': 'Modern, sleek, tech-inspired.',
    }


    const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
        'Bold & Graphic': <SparkleIcon className="h-4 w-4"/>,
        'Minimalist': <SquareIcon className="h-4 w-4"/>,
        'Photorealistic': <ImageIcon className="h-4 w-4"/>,
        'Illustrated': <PenToolIcon className="h-4 w-4"/>,
        'Tech/Futuristic': <CpuIcon className="h-4 w-4"/>,
    }



  return (
    <div className="relative space-y-3 dark">
        <label className="block text-sm font-medium text-zinc-200">Thumbnail Style</label>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full px-4 py-3 rounded-md border text-left  transition border-white/10 bg-white/8 text-zinc-200 hover:bg-white/12">
            <div className="space-y-1">
                <div className="flex items-center gap-2 font-medium">
                    {styleIcons[value]}
                    <span>{value}</span>
                </div>
                <p className="text-xs text-zinc-400">{styleDescriptions[value]}</p>
            </div>
            <ChevronDownIcon className={['h-5 w-5 text-zinc-400 transition-transform', isOpen && 'rotate-180'].join(' ')}/>
        </button>

        {isOpen && (
            <div className="absolute bottom-0 z-50 mt-1 w-full rounded-md bg-black/20 border border-white/12 backdrop-blur-3xl shadow-lg">
                {thumbnailStyles.map((style)=>(
                    <button key={style} 
                    type="button" 
                    onClick={() => {onChange(style); setIsOpen(false)}} 
                    className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-black/30">
                        <div className='mt-0.5'>{styleIcons[style]}</div>
                        <div className="font-medium">{style}</div>
                        <p className="text-xs text-zinc-400">{styleDescriptions[style]}</p>
                    </button>
                ))}
            </div>
        )}
    </div>
  )
}

export default StyleSelector