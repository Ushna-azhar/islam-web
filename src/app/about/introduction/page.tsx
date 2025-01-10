import React from 'react';

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-teal-300 via-teal-600 to-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold text-shadow-lg mb-10 animate__animated animate__fadeIn">
          The Beauty of Islam
        </h1>

        {/* Introduction Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-100">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">What is Islam?</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Islam is a comprehensive way of life, emphasizing submission to the will of Allah (<span className="font-bold">اللہ</span>). Founded by the Prophet Muhammad (<span className="font-bold">محمد ﷺ</span>) in the 7th century, Islam promotes peace, justice, and compassion. 
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            The Quran, revealed through the angel <span className="font-bold">جبرائیل علیہ السلام</span>, serves as the ultimate guide for over 1.8 billion Muslims worldwide, transcending cultural and geographical boundaries.
          </p>
        </section>

        {/* Key Beliefs in Islam Section */}
        <section className="bg-teal-100 p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">Key Beliefs in Islam</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Islam is founded on six key beliefs that shape every Muslim&apos;s life:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li><strong>Belief in One God (Allah):</strong> Allah is eternal, all-knowing, and merciful. Muslims worship Him alone.</li>
            <li><strong>Belief in Angels:</strong> Created by Allah to carry out His commands, angels like <span className="font-bold">جبرائیل علیہ السلام</span> have significant roles.</li>
            <li><strong>Belief in Prophets:</strong> Muslims honor all prophets, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad (<span className="font-bold">محمد ﷺ</span>) as the final prophet.</li>
            <li><strong>Belief in Holy Books:</strong> Sacred scriptures such as the Torah, Psalms, Gospel, and the Quran guide Muslims&apos; lives.</li>
            <li><strong>Belief in the Day of Judgment:</strong> Life after death is a fundamental belief, with rewards for righteousness and accountability for actions.</li>
            <li><strong>Belief in Divine Predestination:</strong> Muslims believe in Allah&apos;s supreme knowledge and will while maintaining human free will.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
