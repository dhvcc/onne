import ru from './ru.json'

export const en: typeof ru = {
  common: {
    btnLogin: 'Sign in with Zenmoney',
    btnAbout: 'What is Zerro?',
    haveTrouble: 'Not loading?',
    btnAlternativeSignIn: 'Try this',
    refresh: 'Refresh',
    refreshData: 'Refresh Data',
    leftover: 'Balance',
    category: 'Category',
    noCategory: 'No Category',
    transfer: 'Transfer',
    outcome: 'Expense',
    debt: 'Debt',
    budget: 'Budget',
    available: 'Available',
    activity: 'Activity',
    transactions: 'Transactions',
    comment: 'Comment',
    currency: 'Currency',
    currency_one: '1 currency',
    currency_few: '{{count}} currencies',
    currency_many: '{{count}} currencies',
    currency_other: '{{count}} currencies',
    moneyDnd: 'Money',
    moneyDnd_1: 'Monies',
    moneyDnd_2: 'Money',
    moneyDnd_3: 'Moniesss',
    moneyDnd_4: 'Money',
    moneyDnd_5: 'Monies',
    moneyDnd_6: 'Monies',
    edit: 'Edit',
    close: 'Close',
    today: 'Today',
    yesterday: 'Yesterday',
    selectCategory: 'Select category',
    addCategory: 'Add category',
    showAllCategories: 'Show all categories',
    mixedCategories: 'Mixed categories',
    showMore: 'Show more',
    iOwe: 'I Owe',
    iAmOwed: 'Owed to Me',
    tagSelected_zero: 'Nothing Selected',
    tagSelected_one: '{{count}} category',
    tagSelected_few: '{{count}} categories',
    tagSelected_many: '{{count}} categories',
    tagSelected_other: '{{count}} categories',
    groupNew: 'New Group',
    tagNull: 'No Category',
    tagNew: 'New Category',
    defaultTagGroup: 'Categories',
    defaultAccountGroup: 'Transfers',
    defaultMerchantGroup: 'Debts',
    defaultPayeeGroup: 'Debts',
    total: 'Total',
  },

  errorGlobal: {
    message: "Everything's broken 💩",
    btnFix: 'Fix It 🛠',
  },

  errorBoudary: {
    title: 'Something crashed 👻',
    description:
      "Refresh the page, and if that doesn't help, try logging out and logging in again.",
    btnRefresh: 'Refresh',
    btnLogOut: 'Log Out',
    errorMsg: "Screaming in programmer's language: {{message}} !1!!",
  },

  loadingHints: {
    hint: 'Loading... 🖤',
    hint_1: 'The first load is always the longest 😅',
    hint_2: 'It all depends on the internet and the number of transactions 🤞',
    hint_3: 'Maybe it will load after all? 🤔',
    hint_4: 'This is taking a while, try refreshing the page 🤪',
  },

  overspendNotice: {
    title: 'Overspending',
    description:
      'Add funds to categories with negative balance to be sure of your budget.',
    btn: 'Fix Automatically',
    confirm: {
      title: 'Resolve Overspending?',
      okText: 'Cover Overspending',
      cancelText: 'Cancel',
    },
  },

  quickBudgets: {
    coverOverspend: 'Cover Overspending',
    dropLeftover: 'Drop Leftover',
    avgOutcome_one: '$t(prevOutcome)',
    avgOutcome_few: 'Average Expense for {{count}} months',
    avgOutcome_many: 'Average Expense for {{count}} months',
    avgOutcome_other: 'Average Expense for {{count}} months',
    avgOutcome_year: 'Average Expense for the year',
    avgOutcome_halfYear: 'Average Expense for half a year',
    goal: 'Goal',
    prevBudget: 'Previous Budget',
    prevOutcome: 'Previous Expense',
    sumOfChildren: 'Sum of Child Categories',
  },

  envelopeEditDialog: {
    titleNew: 'New Category',
    titleEdit: 'Edit Category',
    nameLabel: 'Name',
    nameError: 'A name is definitely useful 😉',
    currencyLabel: 'Currency',
    visibilityLabel: 'Show in budget',
    visibility: {
      auto: 'Automatically',
      visible: 'Always show',
      hidden: 'Always hide',
    },
    keepIncomeLabel: 'Put income into this category',
    btnSave: 'Save category',
    btnCreate: 'Create category',
    btnCancel: 'Cancel',
    removeColor: 'Remove color',
  },

  transactionContextMenu: {
    selectSimilar: 'Select others from this sync',
    markViewed: 'Mark as viewed',
    markViewedOlder: 'Mark all below as viewed',
    markUnviewed: 'Mark as new',
    delete: 'Delete',
    restore: 'Restore',
  },

  accounts: {
    pageTitle: 'Accounts',
    inBalance: 'In Balance',
    inBalanceDescription:
      'The money in these accounts is counted in the budget',
    other: 'Other',
    otherDescription:
      'These accounts are not counted in the budget, transfers to them are reflected as expenses. It is convenient to separate investment accounts, mortgages, loans, and long-term savings here.',
    pageDescription: 'List of accounts',
    archivedAccounts_one: '+{{count}} archived account',
    archivedAccounts_other: '+{{count}} archived accounts',
    archivedAccounts_few: '+{{count}} archived accounts',
    archivedAccounts_many: '+{{count}} archived accounts',
    hideArchived: 'Hide archived',
    showArchived: 'Show archived',
  },

  analytics: {
    pageTitle: 'Analytics',
    period_all: 'for all time',
    period_year: 'for the year',
    period_3years: 'for three years',

    incomesAndOutcomes: 'Incomes and Expenses',
    income: 'Income',
    outcome: 'Expense',
    netIncome: 'Net Income',
    netOutcome: 'Net Expense',

    netWorth: {
      title: 'Net Worth',
      lented: 'Owed to Me',
      debts: 'Debts',
      accountDebts: 'Loans',
      fundsInBudget: 'Funds in Balance',
      fundsSaving: 'Funds out of Balance',
      total: 'Total',
    },
  },

  donation: {
    pageTitle: 'Support the App',
    pageDescription: '',
    heading: 'Support the App',
    subtitle:
      "Subscribe on Patreon or just transfer any amount for the development of the project. And don't forget to mark it in your budget 😉",
    patreonTitle: 'Patreon',
    patreonDescription:
      'Patreon allows you to regularly donate a comfortable amount for the development of the project',
    cardTitle: 'Transfer to card',
    cardDescription: 'You can always transfer any amount',
    afterword:
      "And be sure to tell your loved ones about budgeting. It's hard to talk about money, but this knowledge can greatly improve their lives 🖤",
  },

  token: {
    pageTitle: 'Token',
    pageDescription: '',
    heading: '⚠️ Attention',
    body: 'The token provides indefinite access to your account. Applications use the token instead of login and password to retrieve data. Use it carefully and keep it in a safe place.',
    btnHide: 'Hide Token',
    btnShow: 'Show Token',
  },

  budgets: {
    pageTitle: 'Budget for {{month}}',
    budgetedThisMonth: 'Budgeted This Month',
    leftoverFromLastMonth: 'Leftover from Last Month',
    leftoverFrom: 'Leftover from {{month}}',
    availableFor: 'Available for',
    balanceFor: 'Balance for',
    balanceChartTooltip:
      'The solid line shows the change in balance this month. The dotted line is for the previous month.',
    availableTitleNow: 'Available Now',
    availableTitleFuture_1: 'Will be available in January',
    availableTitleFuture_2: 'Will be available in February',
    availableTitleFuture_3: 'Will be available in March',
    availableTitleFuture_4: 'Will be available in April',
    availableTitleFuture_5: 'Will be available in May',
    availableTitleFuture_6: 'Will be available in June',
    availableTitleFuture_7: 'Will be available in July',
    availableTitleFuture_8: 'Will be available in August',
    availableTitleFuture_9: 'Will be available in September',
    availableTitleFuture_10: 'Will be available in October',
    availableTitleFuture_11: 'Will be available in November',
    availableTitleFuture_12: 'Will be available in December',
    availableTitlePast_1: 'Left at the end of January',
    availableTitlePast_2: 'Left at the end of February',
    availableTitlePast_3: 'Left at the end of March',
    availableTitlePast_4: 'Left at the end of April',
    availableTitlePast_5: 'Left at the end of May',
    availableTitlePast_6: 'Left at the end of June',
    availableTitlePast_7: 'Left at the end of July',
    availableTitlePast_8: 'Left at the end of August',
    availableTitlePast_9: 'Left at the end of September',
    availableTitlePast_10: 'Left at the end of October',
    availableTitlePast_11: 'Left at the end of November',
    availableTitlePast_12: 'Left at the end of December',
    inEnvelopes: 'In Categories',
    inEnvelopesTooltip:
      "This amount is currently in categories (the 'Available' column)",
    inBalance: 'In Balance',
    budgetedInFuture: 'Budgeted in Future',
    budgetedInFutureTooltip: 'These funds are reserved for future budgets',
    toBeBudgeted: 'To Be Budgeted',
    notAllocated: 'Not Allocated',
    allAllocated: 'Funds Allocated',
    toBeBudgetedTooltip: 'Unallocated Funds',
    explainer: {
      overspend: 'Add funds to categories with overspending.',
      hasFreeMoney:
        'Looks great! Distribute the free funds to be perfectly fine.',
      negativeBalance:
        "Seems like you have a negative balance, so there's nothing to allocate. It's best to move debts out of balance.",
      zeroToBeBudgeted: 'All funds are allocated, keep it up!',
      budgetedMoreThanHave:
        "You've allocated more funds than you have. Something might fall short. To fix it, lay out the excess from categories.",
    },
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    createEnvelope: 'Create Category',
    categories: 'Categories',
    categories_all: 'Categories (all)',
    parentOverspend:
      'Overspending in the parent category.\nIncrease the budget by {{amount}}.',
    isSelf: '(main)',
    envelopeCurrencyTooltip:
      'The budget of this category is set in {{currency}}. It will be automatically recalculated at the current exchange rate.',
    addGoal: 'Add goal',
    goal: 'Goal',
    activityStats: {
      incomes: 'Incomes',
      outcomes: 'Expenses',
      transfers: 'Transfers',
      debts: 'Debts',
      fxDifference: 'Exchange Rate Difference',
      unknownCategory: 'Unknown Category',
    },
    statisticWidget: {
      average: 'Average',
      avgBudgeted: 'budgeted',
      avgExpenses: 'expenses',
      over: 'over',
      months3: '3 months',
      months6: '6 months',
      months12: 'a year',
      avgForDate: 'Average for {{date}}',
    },
    actions: {
      actions: 'Actions',
      close: 'Close',
      copyAllBudgets: {
        trigger: 'Copy from last month',
        title: 'Copy all budgets?',
        description:
          'Budgets will be exactly the same as in the previous month.',
        okText: 'Copy',
        cancelText: 'Cancel',
      },
      fixOverspends: {
        trigger: 'Cover Overspending',
        title: 'Resolve Overspending?',
        okText: 'Cover Overspending',
        cancelText: 'Cancel',
      },
      startAgain: {
        trigger: 'Reset all leftovers',
        title: 'Want to start all over again?',
        description:
          'Leftovers in all categories will be reset, and future budgets will be removed. You will be able to start allocating funds from scratch. Only budgets will change, all other data will remain as is.',
        okText: 'Reset leftovers',
        cancelText: 'Cancel',
      },
      completeAllGoals: {
        trigger: 'Complete all goals',
        title: 'Complete all goals?',
        description:
          'Budgets will be set so that goals for this month are achieved.',
        okText: 'Complete goals',
        cancelText: 'Cancel',
      },
    },
  },

  creatingNewGroup: {
    okDropIt: 'Okay, let go',
    categoryNeeded: 'You need to drag exactly a category',
    dropCategoryHere: 'Drop the category here',
    newGroup: 'New Group',
  },

  envelopeTableMenu: {
    showAllEnvelopes: 'Show all categories',
    showPrtiallyEnvelopes: 'Hide part of the categories',
    goToEditMode: 'Edit mode',
    leaveEditMode: 'Exit edit mode',
  },

  accountContextMenu: {
    moveInBalance: 'Include in balance',
    moveFromBalance: 'Exclude from balance',
  },

  confirmDefaults: {
    title: 'Are you sure?',
    cancelText: 'Cancel',
    okText: 'OK',
  },

  fxRates: {
    title: 'Exchange rates on {{date}}',
    title_current: 'Current exchange rates on {{date}}',
    reset: 'Reset',
    download: 'Download exchange rates',
  },

  goals: {
    goalType: 'Type of goal',
    progressOnTagret: '{{budgeted}} out of {{target}}',
    names: {
      monthly: 'Regular savings',
      monthlySpend: 'Monthly amount',
      targetBalance: 'Save a sum',
      incomePercent: 'Percentage of income',
    },
    inputLabels: {
      monthly: 'Save each month',
      monthlySpend: 'Need per month',
      targetBalance: 'I want to save',
      incomePercent: 'Percent of income',
    },
    tillDate: 'By a specific date',
    remove: 'Remove goal',
    save: 'Save goal',
    goalsProgress: 'Goals {{percent}}%',
    completeAll: {
      title: 'Complete all goals?',
      description:
        'Budgets will be set so that goals for this month are achieved.',
      okText: 'Complete goals',
      cancelText: 'Cancel',
    },
    toWords: {
      monthly: 'Saving {{sum}} each month',
      monthlySpend: 'Need {{sum}} per month',
      targetBalance: 'Want to save {{sum}}',
      targetBalanceToDate: 'Want to save {{sum}} by {{month}}',
      incomePercent: 'Saving {{percent}}% of income',
      till: 'by {{month}}',
      till_1: 'by January',
      till_2: 'by February',
      till_3: 'by March',
      till_4: 'by April',
      till_5: 'by May',
      till_6: 'by June',
      till_7: 'by July',
      till_8: 'by August',
      till_9: 'by September',
      till_10: 'by October',
      till_11: 'by November',
      till_12: 'by December',
    },
  },

  reciept: {
    unknown: 'Unknown receipt format 🤷🏻‍♂️',
    sum: 'Amount',
    date: 'Date',
    fn: 'FN',
    fp: 'FP',
    i: 'FD',
  },

  navigation: {
    settings: 'Settings',
    budget: 'Budget',
    transactions: 'Transactions',
    yearWrapped: 'Year Overview',
    about: 'How to use',
    stats: 'Analytics',
    accounts: 'Accounts',
    donate: 'Support the project',
  },

  settings: {
    settings: 'Settings',
    language: 'Language',
    advancedSettings: 'Advanced settings...',
    export: 'Export',
    downloadCSV: 'Download CSV',
    fullBackup: 'Full backup',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    reloadData: 'Reload data',
    regularSync: 'Auto-sync',
    useZmBudgets: 'Zenmoney budgets',
    useZmBudgetsDescription: 'Use the same budgets as Zenmoney',
    convertBudgetsFromZm: 'Convert budgets from Zenmoney',
    budgetsConverted: '✅ Budgets converted ({{budgets}})',
    logOut: 'Log out',
    version: 'Version: {{version}}',
  },

  transactions: {
    pageTitle: 'Transactions',
    pageDescription: 'List of transactions',
    emptyState:
      "There are no such transactions.\nMaybe it's about the filters.",
  },

  transaction: {
    otcomeFrom: 'Expense from {{account}}',
    incomeTo: 'Income to {{account}}',
    date: 'Date',
    time: 'Time',
    payee: 'Payment location',
    comment: 'Comment',
    created: 'Transaction created – {{date}}',
    changed: 'Transaction changed – {{date}}',
    btnOtherFromSync: 'Others from this sync',
    type_income: 'Income',
    type_outcome: 'Expense',
    type_transfer: 'Transfer',
    type_debt: 'Debt',
    transactionDeleted: 'Transaction deleted',
    btnRestore: 'Restore',
    btnDelete: 'Delete',
    btnSave: 'Save',
    btnClose: 'Close',
    rate: 'Rate: {{rate}}',
    fullEmptyState: 'Select a transaction to see details',
  },

  transactionsBulkEdit: {
    editTransactions: 'Edit Transactions',
    categories: 'Categories',
    comment: 'Comment',
    cancel: 'Cancel',
    save: 'Apply Changes',
  },

  transactionActions: {
    selected_one: 'Selected {{count}} transaction',
    selected_few: 'Selected {{count}} transactions',
    selected_many: 'Selected {{count}} transactions',
    selected_other: 'Selected {{count}} transactions',
    delete_one: 'Delete {{count}} transaction?',
    delete_few: 'Delete {{count}} transactions?',
    delete_many: 'Delete {{count}} transactions?',
    delete_other: 'Delete {{count}} transactions?',
    deleteBtn: 'Delete',
    cancelDeletion: 'Keep',
    deleteSelected: 'Delete Selected',
    setCategory: 'Set Category',
    actions: 'Actions',
    markViewed: 'Mark as Viewed',
    edit: 'Edit',
    combineToOutcome: 'Combine into Expense',
    combineToOutcomeComment: 'Returns will be deleted or become transfers',
    combineToIncome: 'Combine into Income',
    combineToIncomeComment: 'Expenses will be deleted or become transfers',
    mergeTransactions: 'Merge Transactions',
    mergeTransactionsComment: 'They will simply be deleted 😉',
    selectAll: 'Select All',
  },

  filterDrawer: {
    filter: 'Filter',
    close: 'Close',
    searchComments: 'Search Comments',
    amountFrom: 'Amount From',
    amountTo: 'Amount To',
    dateFrom: 'Date From',
    dateTo: 'Date To',
    transactionType: 'Type of Transaction',
    transactionType_all: 'All Transactions',
    transactionType_outcome: 'Expenses',
    transactionType_transfer: 'Transfers',
    transactionType_income: 'Incomes',
    onlyNew: 'Only New',
    showDeleted: 'Show Deleted',
    clearFilter: 'Clear Filters',
    clearField: 'Clear Field',
    extendedFilters: 'Advanced Filters',
  },

  yearReview: {
    yearReview: 'YEAR IN REVIEW',
    whatWasInPreviousYear: 'What was in the previous year?',

    incomeCard: {
      youEarned: 'You earned',
      perMonth: 'per month',
    },

    outcomeCard: {
      purchaseOfTheYear: 'Purchase of the year #{{number}}',
    },

    noCategory: {
      title_one: '{{count}} transaction',
      title_few: '{{count}} transactions',
      title_many: '{{count}} transactions',
      title_other: '{{count}} transactions',
      withoutCategory_one: 'did not find its category',
      withoutCategory_few: 'did not find their category',
      withoutCategory_many: 'did not find their category',
      withoutCategory_other: 'did not find their category',
      allTransactionsHaveCategories:
        'Great! Not a single transaction without a category!',
    },

    qrCard: {
      youAttached: 'You attached',
      receipt_one: '{{count}} receipt',
      receipt_few: '{{count}} receipts',
      receipt_many: '{{count}} receipts',
      receipt_other: '{{count}} receipts',
    },

    payeeByFrequency: {
      favouritePlace: 'Favorite Place #{{number}}',
      purchase_one: '{{count}} purchase with an average receipt of ',
      purchase_few: '{{count}} purchases with an average receipt of ',
      purchase_many: '{{count}} purchases with an average receipt of ',
      purchase_other: '{{count}} purchases with an average receipt of ',
      andTotalSpend: 'And a total spend of ',
    },

    payeeByOutcome: {
      'spentHere ': 'Here you spent ',
      ' purchase_one': ' ({{count}} purchase)',
      ' purchase_few': ' ({{count}} purchases)',
      ' purchase_many': ' ({{count}} purchases)',
      ' purchase_other': ' ({{count}} purchases)',
    },
  },
}