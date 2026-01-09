import React from 'react';

export default function EmployeesContacts() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1502px] mx-auto md:w-[90%] w-full px-6">
        <h2 className="text-3xl font-bold mb-14">Контакты сотрудников</h2>

        <Section title="Директора">
          <div className="flex flex-wrap gap-10">
            <Person name="ИВАНОВ" surname="АЛЕКСЕЙ ПЕТРОВИЧ" role="Генеральный директор" />
            <Person name="СИДОРОВ" surname="МАКСИМ ВЛАДИМИРОВИЧ" role="Коммерческий директор" />
          </div>
        </Section>

        <Section title="Отдел продаж">
          <div className="flex flex-wrap gap-10">
            <Person name="СОКОЛОВА" surname="АННА ИГОРЕВНА" role="Руководитель отдела" phone="+7 901 234 56 78" />
            <Person name="ПЕТРОВА" surname="ЕЛЕНА СЕРГЕЕВНА" role="Менеджер" phone="+7 902 345 67 89" />
            <Person name="КОЗЛОВА" surname="ТАТЬЯНА АЛЕКСЕЕВНА" role="Менеджер" phone="+7 903 456 78 90" />
            <Person name="ВАСИЛЬЕВА" surname="ОЛЬГА НИКОЛАЕВНА" role="Менеджер" phone="+7 (495) 123-45-67" />
          </div>
        </Section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          <MiniSection title="Снабжение">
            <Person name="ФЕДОРОВ" surname="ДМИТРИЙ АНДРЕЕВИЧ" role="Руководитель" phone="+7 904 567 89 01" />
          </MiniSection>
          <MiniSection title="Логистика">
            <Person name="СЕМЁНОВ" surname="АРТЁМ ВИКТОРОВИЧ" role="Ответственный" phone="+7 905 678 90 12" />
          </MiniSection>
          <MiniSection title="Контроль">
            <Person name="ЛОГИНОВА" surname="МАРИЯ СТАНИСЛАВОВНА" role="Специалист" phone="+7 906 789 01 23" />
          </MiniSection>
          <MiniSection title="Развитие">
            <Person name="ЕГОРОВ" surname="ИГОРЬ ВЛАДИМИРОВИЧ" role="Руководитель" phone="+7 907 890 12 34" />
          </MiniSection>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-20">
      <h3 className="text-red-500 text-lg mb-10">{title}</h3>
      {children}
    </div>
  );
}

function MiniSection({ title, children }) {
  return (
    <div>
      <h3 className="text-red-500 text-lg mb-10">{title}</h3>
      {children}
    </div>
  );
}

function Person({ name, surname, role, phone }) {
  return (
    <div className="flex gap-6 max-w-[300px]">
      <span className="w-[11px] h-[162px] bg-[#c83642] flex-shrink-0" />
      <div>
        <p className="font-extrabold text-base">{name}</p>
        <p className="text-sm mb-2">{surname}</p>
        <p className="text-red-500 text-sm mb-3">{role}</p>
        {phone && (
          <>
            <p className="text-sm font-medium">{phone}</p>
            <p className="text-xs text-gray-400">Viber, WhatsApp, Telegram</p>
          </>
        )}
      </div>
    </div>
  );
}