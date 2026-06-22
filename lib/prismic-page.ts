import { notFound } from "@tanstack/react-router";
import { createClient } from "@/prismicio";
import type { AllDocumentTypes } from "@/prismicio-types";

type DocumentType = AllDocumentTypes["type"];
type DocumentByType<T extends DocumentType> = Extract<
  AllDocumentTypes,
  { type: T }
>;

export async function loadPrismicDocumentByUid<T extends DocumentType>(
  type: T,
  uid: string,
): Promise<DocumentByType<T>> {
  const client = createClient();

  try {
    return (await client.getByUID(type, uid)) as DocumentByType<T>;
  } catch {
    throw notFound();
  }
}

export async function loadPrismicSingle<T extends DocumentType>(
  type: T,
): Promise<DocumentByType<T>> {
  const client = createClient();
  return (await client.getSingle(type)) as DocumentByType<T>;
}

export async function loadAllPrismicByType<T extends DocumentType>(
  type: T,
): Promise<DocumentByType<T>[]> {
  const client = createClient();
  return (await client.getAllByType(type)) as DocumentByType<T>[];
}
