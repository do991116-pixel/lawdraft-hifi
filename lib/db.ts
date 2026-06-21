import { createClient } from './supabase/client'
import type { Case, CaseStatus, DocType } from './storage'

function rowToCase(row: Record<string, unknown>): Case {
  return {
    id: row.id as string,
    name: row.name as string,
    docType: row.doc_type as DocType,
    prompt: row.prompt as string,
    additionalInstructions: row.additional_instructions as string | undefined,
    draft: row.draft as string | undefined,
    status: row.status as CaseStatus,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  }
}

export async function getCases(): Promise<Case[]> {
  const supabase = createClient()
  const { data } = await supabase
    .from('cases')
    .select('*')
    .order('updated_at', { ascending: false })
  return (data || []).map(rowToCase)
}

export async function getCase(id: string): Promise<Case | null> {
  const supabase = createClient()
  const { data } = await supabase
    .from('cases')
    .select('*')
    .eq('id', id)
    .single()
  return data ? rowToCase(data) : null
}

export async function createCase(
  name: string,
  docType: DocType,
  prompt: string,
  additionalInstructions?: string,
): Promise<Case> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('cases')
    .insert({
      user_id: user!.id,
      name,
      doc_type: docType,
      prompt,
      additional_instructions: additionalInstructions || null,
      status: 'draft',
    })
    .select()
    .single()
  if (error) throw error
  return rowToCase(data)
}

export async function updateCase(
  id: string,
  updates: { draft?: string; status?: CaseStatus },
): Promise<void> {
  const supabase = createClient()
  const dbUpdates: Record<string, unknown> = { updated_at: new Date().toISOString() }
  if (updates.draft !== undefined) dbUpdates.draft = updates.draft
  if (updates.status !== undefined) dbUpdates.status = updates.status
  await supabase.from('cases').update(dbUpdates).eq('id', id)
}
