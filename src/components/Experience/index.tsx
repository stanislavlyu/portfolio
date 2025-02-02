"use client"

import Section from "@components/Section"
import Title from "@components/Title"
import { Button } from "@components/ui/button"
import useToggleState from "@hooks/use-toggle-state"
import { SectionType } from "@utils/types"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Card from "./Card"
import Vector from "./Vector"
import { EXPERIENCE_LIST } from "./constants"

const Experience = () => {
  const { state, open } = useToggleState()
  const visibleJobs = state ? EXPERIENCE_LIST : EXPERIENCE_LIST.slice(0, 2)

  return (
    <Section id={SectionType.Experience} className="py-10">
      <Vector />
      <div className="container relative z-20">
        <Title
          title="Work Experience"
          text="A showcase of my journey, skills, and contributions across diverse roles. From building high-performance websites to developing cutting-edge platforms, here are my career highlights."
        />
        <div className="relative mt-8 grid grid-cols-1 gap-4 lg:gap-8 xl:grid-cols-2">
          <AnimatePresence>
            {visibleJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: -32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Card {...job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {!state && (
          <Button variant="outline" className="mt-4" onClick={open}>
            Show More
          </Button>
        )}
      </div>
    </Section>
  )
}

export default Experience
