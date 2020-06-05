export default interface ICacheProvider {
  save(key: string, value: any): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalide(key: string): Promise<void>;
  invalidePrefix(prefix: string): Promise<void>;
}
