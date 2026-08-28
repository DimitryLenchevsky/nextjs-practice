export default async function SettingsPage() {
  await new Promise(resolve => setTimeout(resolve, 200));

  return (
    <div className="p-4 bg-zinc-50 border-2 border-emerald-500 rounded-md">
      <h1 className="text-xl font-bold text-black">Настройки профиля</h1>
      <p className="mt-2 text-zinc-600">Эта страница находится по пути dashboard/settings</p>
    </div>
  );
}
