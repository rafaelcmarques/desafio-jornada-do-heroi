// PaginationOutlined.tsx
import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface PaginationProps {
  currentPage: number
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
  totalPages: number
}

export function PaginationOutlined({
  currentPage,
  handleChange,
  totalPages,
}: PaginationProps) {
  return (
    <Stack spacing={2} className="m-auto">
      <Pagination
        count={totalPages}
        page={currentPage}
        variant="outlined"
        color="secondary"
        onChange={handleChange}
      />
    </Stack>
  )
}
