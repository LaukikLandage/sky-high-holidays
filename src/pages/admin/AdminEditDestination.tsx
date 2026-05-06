import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Trash2, 
  Image as ImageIcon, 
  MapPin, 
  Clock, 
  IndianRupee,
  FileText,
  Calendar,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Bed
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useDestinationStore, Destination } from '@/store/useDestinationStore';

export default function AdminEditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { destinations, addDestination, updateDestination } = useDestinationStore();
  const isEdit = !!id;

  const destination = isEdit ? destinations.find(d => d.id === id) : null;

  const { register, control, handleSubmit, setValue, watch } = useForm<Destination>({
    defaultValues: destination || {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      slug: '',
      location: '',
      duration: '',
      price: '',
      image: '',
      gallery: ['', '', ''],
      overview: '',
      highlights: [''],
      itinerary: [{ day: 1, title: '', content: '' }],
      inclusions: [{ text: '', icon: 'CheckCircle2' }],
      exclusions: [{ text: '', icon: 'XCircle' }],
      cancellationPolicy: [''],
      paymentPolicy: [''],
      terms: '',
      type: 'international'
    }
  });

  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({
    control,
    name: "itinerary"
  });

  const { fields: highlightFields, append: appendHighlight, remove: removeHighlight } = useFieldArray({
    control,
    name: "highlights" as any
  });

  const { fields: inclusionFields, append: appendInclusion, remove: removeInclusion } = useFieldArray({
    control,
    name: "inclusions" as any
  });

  const { fields: exclusionFields, append: appendExclusion, remove: removeExclusion } = useFieldArray({
    control,
    name: "exclusions" as any
  });
  
  const { fields: stayFields, append: appendStay, remove: removeStay } = useFieldArray({
    control,
    name: "accommodationDetails" as any
  });

  const onSubmit = (data: Destination) => {
    if (isEdit) {
      updateDestination(id!, data);
    } else {
      addDestination(data);
    }
    navigate('/admin');
  };

  const name = watch('name');
  useEffect(() => {
    if (!isEdit && name) {
      setValue('slug', name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    }
  }, [name, setValue, isEdit]);

  const [activeTab, setActiveTab] = useState('basic');

  const TabButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
    <button
      type="button"
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-6 py-4 border-b-2 font-bold text-sm transition-all ${
        activeTab === id 
          ? 'border-[#FF7A00] text-[#FF7A00] bg-orange-50/30' 
          : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F3F4F6] pt-48 pb-20 px-6 font-poppins">
      <div className="max-w-5xl mx-auto">
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-[#FF7A00] transition-colors shadow-sm">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-black text-[#020617]">
                {isEdit ? 'Edit Destination' : 'Add New Destination'}
              </h1>
            </div>
            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin')}
                className="rounded-full px-8 h-12"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="rounded-full px-10 h-12 bg-[#020617] text-white hover:bg-[#FF7A00] font-bold shadow-lg shadow-gray-200 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-[24px] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
              <TabButton id="basic" label="Basic Info" icon={FileText} />
              <TabButton id="images" label="Images & Gallery" icon={ImageIcon} />
              <TabButton id="itinerary" label="Itinerary" icon={Calendar} />
              <TabButton id="stays" label="Accommodation Details" icon={Bed} />
              <TabButton id="details" label="Inclusions/Exclusions" icon={CheckCircle2} />
              <TabButton id="policies" label="Policies" icon={ShieldAlert} />
            </div>

            <div className="p-10">
              
              {/* BASIC INFO TAB */}
              {activeTab === 'basic' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Destination Name</label>
                      <input {...register('name')} className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-[#020617]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Slug (URL)</label>
                      <input {...register('slug')} className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-gray-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input {...register('location')} className="w-full pl-12 p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Duration</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input {...register('duration')} className="w-full pl-12 p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Price (INR)</label>
                      <div className="relative">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input {...register('price')} className="w-full pl-12 p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Package Type</label>
                    <select {...register('type')} className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold">
                      <option value="international">International</option>
                      <option value="domestic">Domestic</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Overview</label>
                    <textarea {...register('overview')} rows={6} className="w-full p-6 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-medium text-gray-600 resize-none" />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Highlights</label>
                    {highlightFields.map((field, index) => (
                      <div key={field.id} className="flex gap-2">
                        <input {...register(`highlights.${index}`)} className="flex-1 p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                        <button type="button" onClick={() => removeHighlight(index)} className="w-12 h-12 rounded-xl bg-red-50 text-red-400 hover:text-red-500 flex items-center justify-center">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => appendHighlight('')} className="flex items-center gap-2 text-[#FF7A00] font-black text-xs uppercase tracking-widest hover:underline">
                      <Plus className="w-4 h-4" /> Add Highlight
                    </button>
                  </div>
                </div>
              )}

              {/* IMAGES TAB */}
              {activeTab === 'images' && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Main Cover Image URL</label>
                    <input {...register('image')} className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Gallery Images</label>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex gap-2">
                        <input {...register(`gallery.${i}`)} placeholder={`Image URL ${i+1}`} className="flex-1 p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ITINERARY TAB */}
              {activeTab === 'itinerary' && (
                <div className="space-y-8">
                  {itineraryFields.map((field, index) => (
                    <div key={field.id} className="p-8 rounded-[20px] bg-gray-50 space-y-4 relative group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#020617] text-white flex items-center justify-center font-black">
                          D{index + 1}
                        </div>
                        <input {...register(`itinerary.${index}.title`)} placeholder="Day Title" className="flex-1 bg-white p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold" />
                        <button type="button" onClick={() => removeItinerary(index)} className="w-10 h-10 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 flex items-center justify-center">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <textarea {...register(`itinerary.${index}.content`)} placeholder="Activities for the day..." rows={4} className="w-full bg-white p-6 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-medium text-gray-600 resize-none" />
                    </div>
                  ))}
                  <button type="button" onClick={() => appendItinerary({ day: itineraryFields.length + 1, title: '', content: '' })} className="w-full py-6 rounded-[20px] border-2 border-dashed border-gray-200 text-gray-400 font-bold hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> Add Day to Itinerary
                  </button>
                </div>
              )}

              {/* ACCOMMODATION DETAILS TAB */}
              {activeTab === 'stays' && (
                <div className="space-y-8">
                  {stayFields.map((field, index) => (
                    <div key={field.id} className="p-8 rounded-[24px] bg-gray-50 space-y-6 relative border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#020617] text-white flex items-center justify-center">
                            <Bed className="w-5 h-5 text-[#FF7A00]" />
                          </div>
                          <h4 className="font-black text-[#020617] uppercase tracking-widest text-xs">Accommodation Unit #{index + 1}</h4>
                        </div>
                        <button type="button" onClick={() => removeStay(index)} className="w-10 h-10 rounded-xl bg-red-100 text-red-500 hover:bg-red-200 flex items-center justify-center transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">City</label>
                          <input {...register(`accommodationDetails.${index}.city` as any)} placeholder="e.g. Ubud" className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Country</label>
                          <input {...register(`accommodationDetails.${index}.country` as any)} placeholder="e.g. Indonesia" className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Hotel Name</label>
                          <input {...register(`accommodationDetails.${index}.name` as any)} placeholder="e.g. The Lokha Ubud Resort" className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Room Type</label>
                          <input {...register(`accommodationDetails.${index}.roomType` as any)} placeholder="e.g. Pool Villa" className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Number of Nights</label>
                          <input type="number" {...register(`accommodationDetails.${index}.nights` as any)} className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Meals Included</label>
                          <input {...register(`accommodationDetails.${index}.meals` as any)} placeholder="e.g. Daily Breakfast" className="w-full p-4 rounded-xl bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                        </div>
                        <div className="md:col-span-2 flex items-center gap-3 bg-white p-4 rounded-xl">
                          <input type="checkbox" {...register(`accommodationDetails.${index}.similarAvailable` as any)} id={`similar-${index}`} className="w-5 h-5 rounded accent-[#FF7A00]" />
                          <label htmlFor={`similar-${index}`} className="text-xs font-bold text-gray-600 cursor-pointer">"or Similar" category hotels may be provided</label>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={() => appendStay({ city: '', country: '', name: '', roomType: '', nights: 1, meals: '', similarAvailable: true })} className="w-full py-8 rounded-[24px] border-2 border-dashed border-gray-200 text-gray-400 font-bold hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all flex flex-col items-center justify-center gap-3 bg-white hover:bg-orange-50/10">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-[#FF7A00] transition-colors">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="uppercase tracking-widest text-xs font-black">Add New Accommodation Unit</span>
                  </button>
                </div>
              )}


              {/* DETAILS TAB */}
              {activeTab === 'details' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" /> Inclusions
                      </label>
                      <button type="button" onClick={() => appendInclusion({ text: '', icon: 'CheckCircle2' })} className="text-[#FF7A00] font-black text-[10px] uppercase tracking-widest hover:underline">+ Add Inclusion</button>
                    </div>
                    <div className="space-y-3">
                      {inclusionFields.map((field, index) => (
                        <div key={field.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                          <div className="flex gap-2">
                            <input {...register(`inclusions.${index}.text` as any)} placeholder="Inclusion Text" className="flex-1 p-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                            <button type="button" onClick={() => removeInclusion(index)} className="w-10 h-10 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 flex items-center justify-center transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <select {...register(`inclusions.${index}.icon` as any)} className="w-full p-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-xs">
                            <option value="CheckCircle2">Generic Inclusion (Check)</option>
                            <option value="Hotel">Hotel / Accommodation</option>
                            <option value="Utensils">Meals / Food</option>
                            <option value="Plane">Flights / Airfare</option>
                            <option value="CarTaxiFront">Transport / Transfers</option>
                            <option value="Ticket">Entry Tickets / Tours</option>
                            <option value="BadgeCheck">Visa / Certificate</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" /> Exclusions
                      </label>
                      <button type="button" onClick={() => appendExclusion({ text: '', icon: 'XCircle' })} className="text-[#FF7A00] font-black text-[10px] uppercase tracking-widest hover:underline">+ Add Exclusion</button>
                    </div>
                    <div className="space-y-3">
                      {exclusionFields.map((field, index) => (
                        <div key={field.id} className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                          <div className="flex gap-2">
                            <input {...register(`exclusions.${index}.text` as any)} placeholder="Exclusion Text" className="flex-1 p-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-sm" />
                            <button type="button" onClick={() => removeExclusion(index)} className="w-10 h-10 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 flex items-center justify-center transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <select {...register(`exclusions.${index}.icon` as any)} className="w-full p-3 rounded-lg bg-white border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-bold text-xs">
                            <option value="XCircle">Generic Exclusion (X)</option>
                            <option value="ShieldX">Insurance</option>
                            <option value="Wallet">Personal Expenses / Fees</option>
                            <option value="Utensils">Food / Drinks</option>
                            <option value="Plane">Flights</option>
                            <option value="CircleOff">Optional Activities</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* POLICIES TAB */}
              {activeTab === 'policies' && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Payment Policy (One item per line)</label>
                    <textarea 
                      onChange={(e) => setValue('paymentPolicy', e.target.value.split('\n'))}
                      defaultValue={destination?.paymentPolicy.join('\n')}
                      rows={4} 
                      className="w-full p-6 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-medium text-gray-600" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Cancellation Policy (One item per line)</label>
                    <textarea 
                      onChange={(e) => setValue('cancellationPolicy', e.target.value.split('\n'))}
                      defaultValue={destination?.cancellationPolicy.join('\n')}
                      rows={4} 
                      className="w-full p-6 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-medium text-gray-600" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Terms & Conditions</label>
                    <textarea {...register('terms')} rows={6} className="w-full p-6 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF7A00]/20 font-medium text-gray-600" />
                  </div>
                </div>
              )}

            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
