import React from 'react'
import Card from './Card'

const teamMemberCard = ({ teamMember }) => (
  <Card className="mb-8">
    <p className="text-l font-semibold">
      <a href={teamMember.github} target="new">
        {teamMember.title}
      </a>
    </p>
    <p className="mt-6">{teamMember.summary}</p>
    <div className="flex items-center mt-8">
      <img
        className="w-12 h-12 mr-4 rounded-full"
        src={teamMember.teamMemberImage}
        alt={teamMember.teamMemberName}
      />
    </div>
  </Card>
)

export default teamMemberCard
