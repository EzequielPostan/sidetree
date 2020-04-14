import DidDocumentModel from './models/DidDocumentModel';
import DidPublicKeyModel from './models/DidPublicKeyModel';

/**
 * Class containing reusable DID Document related operations.
 * NOTE: This class should only be used by the `DocumentComposer`.
 */
export default class DidDocument {
  /**
   * Gets the specified public key from the given DID Document.
   * Returns undefined if not found.
   * @param keyId The ID of the public-key.
   */
  public static getPublicKey (didDocument: DidDocumentModel, keyId: string): DidPublicKeyModel | undefined {
    for (let i = 0; i < didDocument.publicKey.length; i++) {
      const publicKey = didDocument.publicKey[i];

      if (publicKey.id && publicKey.id.endsWith(keyId)) {
        return publicKey;
      }
    }

    return undefined;
  }
}