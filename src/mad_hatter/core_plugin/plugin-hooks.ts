import { CatHook } from '@hook'
import { CatPlugin } from '@plugin'

// Cheshire Cat hooks

CatHook.add('beforeBootstrap', () => {})

CatHook.add('afterBootstrap', () => {})

// Mad Hatter hooks

CatHook.add('allowedEmbedders', embedders => embedders)

CatHook.add('allowedLLMs', llms => llms)

// Agent Manager hooks

CatHook.add('agentPromptInstructions', prompt => prompt)

CatHook.add('allowedTools', tools => tools)

CatHook.add('beforeAgentStarts', input => input)

CatHook.add('agentFastReply', reply => reply)

CatHook.add('agentPromptPrefix', prefix => prefix)

CatHook.add('agentPromptSuffix', suffix => suffix)

// Stray Cat hooks

CatHook.add('recallQuery', query => query)

CatHook.add('beforeReadMessage', msg => msg)

CatHook.add('beforeSendMessage', msg => msg)

CatHook.add('beforeStoreEpisodicMemory', doc => doc)

CatHook.add('beforeRecallMemories', configs => configs)

CatHook.add('afterRecallMemories', () => {})

// Vector Memory hooks

CatHook.add('memoryCollections', collections => collections)

// Rabbit Hole hooks

CatHook.add('fileParsers', parsers => parsers)

CatHook.add('webParsers', parsers => parsers)

CatHook.add('textSplitter', splitter => splitter)

CatHook.add('beforeStoreDocuments', docs => docs)

CatHook.add('beforeInsertInMemory', doc => doc)

CatHook.add('beforeSplitTexts', texts => texts)

CatHook.add('afterSplitTexts', docs => docs)

// Plugin hooks

CatPlugin.on('installed', () => console.log('Core plugin installed event executed'))

CatPlugin.on('removed', () => console.log('Core plugin removed event executed'))

CatPlugin.on('enabled', () => console.log('Core plugin enabled event executed'))

CatPlugin.on('disabled', () => console.log('Core plugin disabled event executed'))
