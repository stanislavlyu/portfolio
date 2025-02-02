import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import { GlowEffect } from "@components/ui/glow-effect"
import { COLORS } from "@utils/constants"
import React from "react"
import { ExperienceCardProps } from "./types"

const ExperienceCard = ({
  role,
  company,
  duration,
  responsibilities,
}: ExperienceCardProps) => (
  <Card className="relative h-full rounded-lg">
    <GlowEffect
      colors={COLORS}
      mode="flowHorizontal"
      duration={3}
      className="opacity-20"
      blur="soft"
    />
    <div className="relative h-full rounded-lg border border-gray-700 bg-white/10 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{role}</CardTitle>
        <CardDescription className="text-white">{company}</CardDescription>
        <p className="text-sm">{duration}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx} className="text-base text-white">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </div>
  </Card>
)

export default ExperienceCard
