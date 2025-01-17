import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable';


function Contents({ board }) {

  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: {distance:10} })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: {distance:10} })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: {
    delay:250,
    tolerance:5
  }})
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event)
    const {active, over} = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      const dndOrderedColums = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColums)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: "100%",
          height: (theme) => theme.custom.contentHeight,
          display: "flex",
          p:'10px 0'
        }}>
        <ListColumns columns={orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default Contents
