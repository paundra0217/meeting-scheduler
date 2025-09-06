// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { PhoneCountryCode } from '@/pages/clients/add-client';
// import { useEffect, useState } from 'react';

// type DropdownPhoneCodeProps = {
//     value?: string;
//     countryCodeList: PhoneCountryCode[];
//     onValueChange?(value: string): void;
// };

// export default function DropdownPhoneCode({ value, countryCodeList, onValueChange }: DropdownPhoneCodeProps) {
//     // const countryCodeFlagBaseURL = 'https://country-code-au6g.vercel.app/';

//     const [selectedCountryCode, setSelectedCountryCode] = useState<string>('');
//     const [selectedCountry, setSelectedCountry] = useState<PhoneCountryCode>();
//     const defaultCode = 'ID';

//     useEffect(() => {
//         const code = selectedCountryCode === '' ? defaultCode : selectedCountryCode;
//         const codeObj = countryCodeList.find((d) => d.code == code);
//         setSelectedCountry(codeObj);
//         onValueChange?.(selectedCountryCode);
//     }, [onValueChange, selectedCountryCode, countryCodeList]);

//     // useEffect(() => {
//     //     if (value !== '') {
//     //         const codeObj = countryCodeList.find((d) => d.code == value);
//     //         setSelectedCountry(codeObj);
//     //         onValueChange?.(selectedCountryCode);
//     //     }
//     // }, [value, onValueChange, selectedCountryCode, countryCodeList]);

//     // if (value === '') {
//     //     value = defaultCode;
//     // }

//     return (
//         <Select defaultValue="ID" onValueChange={(e) => setSelectedCountryCode(e)}>
//             <SelectTrigger className="w-[108px]">
//                 <SelectValue placeholder="Theme">
//                     {countryCodeList.length > 0 ? (
//                         <>
//                             {selectedCountry?.emoji} {selectedCountry?.dial_code}
//                         </>
//                     ) : (
//                         <>Loading</>
//                     )}
//                 </SelectValue>
//             </SelectTrigger>
//             <SelectContent>
//                 {countryCodeList?.map((e) => {
//                     return (
//                         <SelectItem key={e.code} value={e.code}>
//                             {' '}
//                             {e.emoji} {e.dial_code} - {e.name}
//                         </SelectItem>
//                     );
//                 })}
//             </SelectContent>
//         </Select>
//     );
// }
