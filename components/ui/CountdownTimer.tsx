'use client'

import { useState, useEffect } from 'react'
import { CountdownItem } from '@/types/home'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '02',
    hours: '12',
    minutes: '45',
    seconds: '18'
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let seconds = parseInt(prev.seconds) - 1
        let minutes = parseInt(prev.minutes)
        let hours = parseInt(prev.hours)
        let days = parseInt(prev.days)

        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        if (hours < 0) {
          hours = 23
          days -= 1
        }

        return {
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const countdownItems: CountdownItem[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ]

  return (
    <div className="flex justify-center gap-4 mb-8">
      {countdownItems.map((item, index) => (
        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 min-w-20">
          <div className="text-2xl font-black">{item.value}</div>
          <div className="text-sm opacity-90">{item.label}</div>
        </div>
      ))}
    </div>
  )
}