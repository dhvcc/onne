import React, { useState, useCallback, useMemo } from 'react'
import { Box, Button } from '@mui/material'
import { TAccountId, TISODate } from '@shared/types'
import Rhythm from '@shared/ui/Rhythm'

import { accountModel } from '@entities/account'
import { TransactionsDrawer } from '@components/TransactionsDrawer'
import { WidgetNetWorth } from './WidgetNetWorth'
import { WidgetCashflow } from './WidgetCashflow'
import { WidgetAccHistory } from './WidgetAccHistory'
import { nextPeriod, Period } from './shared/period'
import { useToggle } from '@shared/hooks/useToggle'

export default function Stats() {
  const accs = accountModel.useAccountList()
  const [period, setPeriod] = useState<Period>(Period.LastYear)
  const [showArchived, toggleArchived] = useToggle(false)
  const togglePeriod = useCallback(() => setPeriod(nextPeriod), [])

  const [selected, setSelected] =
    useState<{ id: TAccountId; date: TISODate } | null>(null)

  const accIds = useMemo(
    () =>
      accs
        .filter(acc => showArchived || !acc.archive)
        .sort((acc1, acc2) => {
          if (acc1.archive && acc2.archive) return 0
          if (acc1.archive) return 1
          if (acc2.archive) return -1
          return 0
        })
        .map(acc => acc.id),
    [accs, showArchived]
  )

  const onSelect = useCallback((id: TAccountId, date: TISODate) => {
    setSelected({ id, date })
  }, [])

  const filterConditions = { accounts: selected ? [selected.id] : null }

  return (
    <>
      <Box display="flex" flexDirection="column" pb={10}>
        <Rhythm gap={2} axis="y" p={3}>
          <WidgetNetWorth period={period} onTogglePeriod={togglePeriod} />
          <WidgetCashflow period={period} onTogglePeriod={togglePeriod} />
          {accIds.map(id => (
            <WidgetAccHistory
              key={id}
              id={id}
              period={period}
              onClick={onSelect}
            />
          ))}
          <Button onClick={toggleArchived}>
            {showArchived ? 'Скрыть' : 'Показать'} архивные
          </Button>
        </Rhythm>
      </Box>

      <TransactionsDrawer
        filterConditions={filterConditions}
        initialDate={selected?.date}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}